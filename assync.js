const { pdf } = require("pdf-to-img");



async function conversor() {
  const page = await pdf("./assets/project_proposal.pdf");
  console.log(page)  
}

conversor();


// npm install -S pdf-to-img

// const file = 2;

// it("generates a PDF", async () => {
//   for await (const page of await pdf("example.pdf")) {
//     expect(page).toMatchImageSnapshot();
//   }
// });

// or if you want access to more details:

// it("generates a PDF with 2 pages", async () => {
//   const doc = await pdf("assets/project_proposal.pdf");

//   expect(doc.length).toBe(2);
//   expect(doc.metadata).toEqual("/assets");

//   for await (const page of doc) {
//     expect(page).toMatchImageSnapshot();
//   }
// });
