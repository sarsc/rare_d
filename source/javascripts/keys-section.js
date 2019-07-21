
const key = document.querySelector('.key');

const addTextOnMove = () => {
  key.addEventListener("mouseover", () => {

  const textKey = document.querySelector('#text-key');
  textKey.classList.remove("d-none");
  key.addEventListener("mouseout", () => {
    textKey.classList.add("d-none");
  })
});
}

export { addTextOnMove };
