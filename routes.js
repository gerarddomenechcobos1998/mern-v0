const express = require("express");
const Post = require("./models/Post");
const router = express.Router();

// READ all posts
router.get("/posts", async (req, res) => {
	const posts = await Post.find();
	res.send(posts);
})
// READ ONE post using the ID
router.get("/posts/:id", async (req, res) => {
	try{
		const post = await Post.findOne({ _id: req.params.id });
		res.send(post);
	}
	catch{
		res.status(404);
		res.send({error: "There is not any object with the '_id' specified"})
	}
})
// CREATE a post
router.post("/posts", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
	})
	await post.save()
	res.send(post)
})
// UPDATE a post
router.put("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id });
		// Mira propiedad a propiedad si existen cambios
		if (req.body.title) {
			post.title = req.body.title;
		}

		if (req.body.content) {
			post.content = req.body.content;
		}

		await post.save();
		res.send(post);
	} catch {
		res.status(404)
		res.send({error: "There is not any object with the '_id' specified"})
	}
})
// DELETE a post
router.delete("/posts/:id", async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({error: "There is not any object with the '_id' specified"})
	}
})
module.exports = router