const copyItemToClipboard = (item) => {
  navigator.clipboard.writeText(item);
};

const toggleHamburgerMenu = () => {
  document.querySelector("#modalMenu").className
    ? (document.querySelector("#modalMenu").className = "")
    : (document.querySelector("#modalMenu").className = "hidden");
};
