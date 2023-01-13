const input = document.querySelector("input");
const button = document.querySelector("button");
// const faRegular = document.querySelector(".fa-regular");
const faSolid = document.querySelector(".fa-solid");
let chars = "qwertyuiopasdfghjklZXCVBNMLKJHGFDSA78965412300987654321!@#$%67890?><"


button.onclick = () => {
   let i;
   randomPassword = "";

   faSolid.style.display = "none";
   faSolid.style.display = "block";

   for (let i = 0; i < 16; i++) {
    randomPassword = randomPassword + chars.charAt(
        Math.floor(Math.random() * chars.length)
    );
    
   }
   input.value = randomPassword;
}

function copy() {
    faSolid.style.display = "none";
    faSolid.style.display = "block";

    input.select();
    document.execCommand("copy");

}
