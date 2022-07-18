import res from "express/lib/response";

export const trending = (req, res) =>
  res.send(
    "<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Home</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>"
  );
export const see = (req, res) => {
  console.log(req.params);
  return res.send(
    `<!DOCTYPE html><html lang='ko'><head><title>Wetube</title></head><body><h1>Watch video #${req.params.id}</h1><footer>&copy;2021 Wetube -  All rights reserved</footer></body></html>`
  );
};
export const edit = (req, res) => res.send("Edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
