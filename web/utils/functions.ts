export function formatName(name: string) {
  if (name.indexOf("-") >= 0) {
    let names = name.split("-");

    names = names.map((name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    });

    if (name === "will-o-wisp" || name === "u-turn")
      return names.toString().replaceAll(",", "-");

    return names.toString().replaceAll(",", " ");
  } else {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
