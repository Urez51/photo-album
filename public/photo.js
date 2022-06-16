document.querySelector('.photos')
  .addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete')) {
      event.preventDefault();
      // console.log(event.target);
      const { href } = event.target;
      const responce = await fetch(href, {
        method: 'DELETE',
      });
      await responce.text();
      event.target.closest('.photo').remove();
      // console.log(href);
    }
  });

document.querySelector('.photos')
  .addEventListener('click', async (event) => {
    if (event.target.classList.contains('edit')) {
      event.preventDefault();
      const { href } = event.target;
      
      // const responce = await fetch(href, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     title,
      //   }),
      // });
      console.log(href);
    }
  });
