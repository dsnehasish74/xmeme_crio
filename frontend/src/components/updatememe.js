import React,{useState} from 'react'
const UpdateMeme = (props)=>{
    // console.log(props.match.params.id)
    const route=props.match.params.id
    const [values,setValue] = useState({
        caption:"",
        url:"",
        err:false,
        success:false
    });
    const {caption,url,success,err}=values;
    const handelChange = field =>e =>{
        setValue({...values,[field]:e.target.value})
    }
    const handelClick = e=>{
        e.preventDefault();
        fetch(`http://localhost:8000/memes/${route}`).then(response=>response.json()).then(meme=>{
            let updateurl=url!==""?url:meme.url ;
            let updateCaption = caption!==""?caption:meme.caption;
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({caption:updateCaption,url:updateurl})
            };
            fetch(`http://localhost:8000/memes/${route}`, requestOptions)
                .then(res => res.json())
                .then(data => {
                    if(data.id)
                    setValue({...values,success:true,err:false})
                else{
                    setValue({...values,err:true,success:false})
                }
                });
        })
    }
    return(
        <div className="container">
            <h2>Update Your Meme</h2>
            <form className="w-75 p-3">
            <div className="alert alert-success" role="alert" style={{display:success?'':'none'}}>
                Successfully Updated Your Meme
            </div>
            <div className="alert alert-danger" role="alert" style={{display:err?'':'none'}}>
                Error Occured Duplicate url Created
            </div>
            <div className="mb-3">
                <label className="form-label">Add Caption</label>
                <input className="form-control" onChange={handelChange("caption")}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Add url</label>
                <input className="form-control" onChange={handelChange("url")} />
            </div>
            <button type="submit" className="btn btn-primary"  onClick={handelClick} disabled={!((caption.length>0) || (url.length>0))}>Submit</button>
        </form>
        </div>
    );
}

export default UpdateMeme;