document.querySelector('.photos').addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete')) {
    event.preventDefault();
    // console.log(event.target);
    const { href } = event.target;
    console.log(href)
    const responce = await fetch(href, {
      method: 'DELETE',
    });
    await responce.text();
    event.target.closest('.photo').remove();
    // console.log(href);
  }
});

// document.querySelector('.photos')
//   .addEventListener('click', async (event) => {
//     if (event.target.classList.contains('edit')) {
//       event.preventDefault();
//       const { href } = event.target;
//       const responce = await fetch(href, {
//         method: 'GET',
//       });
//       const html = await responce.text();
//       // event.target.closest();
//       console.log(href);
//     }
//   });
