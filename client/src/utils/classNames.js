export default function classNames(...args) {
  return args
    .reduce((acc, val) => {
      if (typeof val === "string") return acc.concat(val.split(" "));
      if (typeof val === "undefined") return acc.concat(val);
      return acc.concat(Object.values(val));
    }, [])
    .join(" ");
}
