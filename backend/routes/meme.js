const express = require('express');
const router = express.Router();
const { saveMemes, getMemes, getMemeById, updateMeme,getAllMemes } = require('../controllers/meme');

/**
 * @swagger
 * definitions:
 *  Meme:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: Name of meme Creator
 *     example: 'Crio'
 *    url:
 *     type: string
 *     description: url of meme
 *     example: 'meme.com'
 *    caption:
 *     type: string
 *     description: caption of the meme
 *     example: 'Great Meme'
*/

router.post('/memes', saveMemes);
/**
 * @swagger
 * tags:
 *  name: PostMeme
 *  description: For Posting Meme To database
 * /memes:
 *  post:
 *      tags: [PostMeme]
 *      description : Post your Meme
 *      parameters:
 *          - in: body
 *            name: meme
 *            description: To create meme
 *            schema:
 *              $ref: '#/definitions/Meme'
 *      requestBody:
 *             content:
 *              application/json:
 *                schema:
 *                   $ref: '#/definitions/Meme'
 *      responses:
 *          200:
 *             description: Success
 */
router.get('/memes', getMemes);
/**
 * @swagger
 * tags:
 *  name: GetMeme
 *  description: For Getting Data about Meme
 * /memes:
 *  get:
 *      tags: [GetMeme]
 *      responses:
 *          default:
 *              description: You will get latest 100 memes posted to the server
 */
router.get('/memes/:memeId', getMemeById);
/**
 * @swagger
 * tags:
 *  name: getMemeById
 *  description: This is for getting a memedata by id
 * /memes/{memeId}:
 *  get:
 *   tags: [getMemeById]
 *   summary: create team
 *   description: create team
 *   parameters:
 *    - in: path
 *      name: memeId
 *      schema:
 *       type: string
 *       required: true
 *       description: id
 *       example: 60253dd4d02bf62228fc3fbf
 *   responses:
 *      200:
 *       description: success
 */

router.patch('/memes/:memeId', updateMeme);
/**
 * @swagger
 * tags:
 *  name: UpdateMeme
 *  description: This is Updating meme data
 * /memes/{memeId}:
 *  patch:
 *      tags: [UpdateMeme]
 *      description : Update your Meme
 *
 *      parameters:
 *          - in: body
 *            name: meme
 *            description: To create meme
 *            schema:
 *             $ref: '#/definitions/Meme'
 *          - in: path
 *            name: memeId
 *            schema:
 *            type: string
 *            required: true
 *            description: id
 *            example: 60253dd4d02bf62228fc3fbf
 *      requestBody:
 *             content:
 *              application/json:
 *                schema:
 *                   url:
 *                    type: string
 *                    example: new_url.com
 *                   caption:
 *                    type: string
 *                    example: new_caption
 *      responses:
 *          200:
 *             description: Success
 */
router.get('/all/memes', getAllMemes);
/**
 * @swagger
 * tags:
 *  name: GetMeme
 *  description: This is for getting all memedata
 * /all/memes:
 *  get:
 *      tags: [GetMeme]
 *      responses:
 *          default:
 *              description: You will get All memes posted to the server
 */
module.exports = router;