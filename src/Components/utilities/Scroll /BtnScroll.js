import { BtnHeader } from "../../../Assets/Styles/CardAndStyles";

export default function BtnScroll() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(BtnHeader)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
  return (
    <>
      <BtnHeader>Rick And Morty</BtnHeader>
    </>
  );
}
