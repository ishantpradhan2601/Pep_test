const factEl = document.getElementById("fact");
const btn = document.getElementById("btn");

async function getCatFact() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    factEl.textContent = data.fact;
  } catch (err) {
    factEl.textContent = "Failed to load fact 😿";
  }
}

btn.addEventListener("click", getCatFact);
