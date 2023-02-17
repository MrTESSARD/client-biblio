const table = document.querySelector("#tableauLivre>tbody")

var l1 = {
  nom: "L'algoritmeique selon UNCIA",
  auteur: "Dimitri",
  pages: 200


}
var l2 = {
  nom: "La france du 19ème",
  auteur: "Albert Patrick",
  pages: 500


}
var l3 = {
  nom: "Le monde des animaux",
  auteur: "Marc Merlin",
  pages: 250


}
var l4 = {
  nom: "Le virus d'Asie",
  auteur: "Tya Milo",
  pages: 120


}
var biblio = [l1, l2, l3, l4]
// console.log(biblio)

// console.log(table)
afficherLivres();

//Avoir boucle pour affficher les livres
function afficherLivres() {
  var tableauLivres = document.querySelector("#tableauLivres tbody")
  var livres = ""
  for (let i = 0; i <= biblio.length - 1; i++) {
    // var livre1 = document.createElement("tr")
    livres += `<tr>
      <td>${biblio[i].nom}</td>
      <td>${biblio[i].auteur}</td>
      <td>${biblio[i].pages}</td>
      <td><button class="btn btn-warning" onClick="afficherFormModif(${i})">Modifier</button></td>
      <td><button class="btn btn-danger" onClick="supprimerLivre(${i})">Supprimer</button></td>
      <tr/>

`;
    // table.appendChild(livre1)

  }
  tableauLivres.innerHTML=livres

}

//formulaire 
function ajoutFormulaireOld() {
  if (!document.querySelector("#formAjout")) {
    var monForm = document.createElement("form")
    monForm.setAttribute("id", "formAjout")
    monForm.innerHTML = `
    <fieldset>
    <legend>Création d'un livre</fieldset>
  <div class="mb-3">
    <label for="titre" class="form-label">Titre</label>
    <input type="text" class="form-control" id="titre" >
  </div>
  <div class="mb-3">
    <label for="auteur" class="form-label">Auteur</label>
    <input type="text" class="form-control" id="auteur" >
  </div>
  <div class="mb-3">
    <label for="pages" class="form-label">Pages</label>
    <input type="number" class="form-control" id="pages" >
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
`
    document.querySelector(".container").appendChild(monForm)
    // e.preventDefault()
  }
  return false


}

function ajoutFormulaire() {
  document.querySelector("#ajoutForm").removeAttribute("class")
  document.querySelector("#modifLivre").className = ("d-none")

  return false //ne pas refraichir la page 


}
//Action bouton Ajouter doit alimenter le tableau biblio
document.querySelector("#validationFormAjout").addEventListener("click", function (event) {
  event.preventDefault()
  var titre = document.querySelector("#ajoutForm #titre").value //titre dans ajout
  var auteur = document.querySelector("#ajoutForm #auteur").value //titre dans ajout
  var pages = document.querySelector("#ajoutForm #pages").value //titre dans ajout
  // console.log(titre)
  ajoutLivre(titre, auteur, pages)
  const formulaire = document.querySelector("#ajoutForm")
  formulaire.reset();
  formulaire.className = ("d-none");
});

function ajoutLivre(titre, auteur, pages) {
  var livre = {
    nom: titre,
    auteur: auteur,
    pages: pages
  }
  biblio.push(livre)
  // console.log(biblio)
  afficherLivres();

}
function supprimerLivre(position) {
  if (confirm("Voulez-vous supprimer le livre ?")) {
    biblio.splice(position, 1)
    afficherLivres();
    alert("Suppression affectué")
    
  }else{

    alert("Suppression annulé ")
  }

  
}
function afficherFormModif(position) {
  document.querySelector("#ajoutForm").className = ("d-none")//cacher
  document.querySelector("#modifLivre").removeAttribute("class")//afficher
// console.log(biblio[position].nom)
  document.querySelector("#modifLivre #titre").value = biblio[position].nom //
  document.querySelector("#modifLivre #auteur").value = biblio[position].auteur//
  document.querySelector("#modifLivre #pages").value = biblio[position].pages //
  document.querySelector("#modifLivre #identifiant").value = position //


  console.log(position)

  
}
document.querySelector("#validationFormModif").addEventListener("click", function(event){
  event.preventDefault()
  var nom = document.querySelector("#modifLivre #titre").value //titre dans ajout
  var auteur = document.querySelector("#modifLivre #auteur").value //titre dans ajout
  var pages = document.querySelector("#modifLivre #pages").value //titre dans ajout
  var positionLivre =  document.querySelector("#modifLivre #identifiant").value //
  // biblio[positionLivre].nom = titre
  // biblio[positionLivre].auteur = auteur
  // biblio[positionLivre].pages = pages
  biblio[positionLivre] = {nom, auteur, pages}
  afficherLivres();
  document.querySelector("#modifLivre").className = ("d-none")//cacher

})