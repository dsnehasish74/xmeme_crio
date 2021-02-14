import React,{useState} from 'react';
const AddMeme = () => {
    const [values,setValue] = useState({
        name:"",
        caption:"",
        url:"",
        err:false,
        success:false
    })
    const {name,caption,url,success,err}=values;
    const handelChange = field =>e =>{
        setValue({...values,[field]:e.target.value})
    }
    const handelClick = e=>{
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name,caption:caption,url:url })
        };
        fetch('http://localhost:8000/memes', requestOptions)
            .then(response => response.json())
            .then(data=>{
                if(data.id)
                setValue({...values,success:true,err:false})
                else{
                    setValue({...values,err:true,success:false})
                }
            })
            .catch((err)=>{
                setValue({...values,err:true})
            })
    }

    return (
        <form className="w-75 p-3 container" >
            <div className="alert alert-success" role="alert" style={{display:success?'':'none'}}>
                Successfully Added to Database
            </div>
            <div className="alert alert-danger" role="alert" style={{display:err?'':'none'}}>
                Error Occured
            </div>
            <div className="mb-3">
                <label className="form-label">Add Creators Name</label>
                <input className="form-control" onChange={handelChange("name")} />
            </div>
            <div className="mb-3">
                <label className="form-label">Add Caption</label>
                <input className="form-control" onChange={handelChange("caption")}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Add url</label>
                <input className="form-control" onChange={handelChange("url")} />
            </div>
            <button type="submit" className="btn btn-primary"  onClick={handelClick} disabled={!((name.length>0)&&(caption.length>0)&&(url.length>0))}>Submit</button>
        </form>
    )
}

export default AddMeme;