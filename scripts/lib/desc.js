
module.exports = (content) => {
	const key = content.contentType + "." + content.name + ".description." + modName;
	const append = Core.bundle.get(key);
	content.description += append;
	return append;
};
