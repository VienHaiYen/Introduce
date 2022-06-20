import {$, $$} from '../js/main.js'

function UpButton() {
  window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
      $(".upButton").style.display = "none";
    } else {
      $(".upButton").style.display = "block";
    }
  });

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY < 200) {
      $(".upButton").style.display = "none";
      $(".upButton").removeEventListener("click", handleScrollTop);
    } else {
      $(".upButton").style.display = "block";
      $(".upButton").addEventListener("click", handleScrollTop);
    }
  });
  return (
    <div className="upButton">
      <i className="ti-arrow-up"></i>
    </div>
  );
}
export default UpButton;
