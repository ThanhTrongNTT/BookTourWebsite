function getQueryVariable(variable) {
  return (
    decodeURIComponent(
      // eslint-disable-next-line no-useless-concat
      (new RegExp("[?|&]" + variable + "=" + "([^&;]+?)(&|#|;|$)").exec(
        window.location.search
        // ) || [, ""])[1].replace(/\+/g, "-")
        // eslint-disable-next-line no-sparse-arrays
      ) || [, ""])[1].replaceAll("-", " ")
    ) || null
  );
}

export default getQueryVariable;
