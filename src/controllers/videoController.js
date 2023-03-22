let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export function trending(req, res, next) {
  res.render("home", { videos });
}

export function search(req, res) {
  res.send("Search");
}

export function edit(req, res) {
  res.send("Edit Video");
}

export function upload(req, res) {
  res.send("Upload Video");
}

export function deleteVideo(req, res) {
  res.send("Delete Video");
}

export function watchVideo(req, res) {
  const id = req.params.id;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Wathching ${video.title}`, video });
  console.log(id);
}
