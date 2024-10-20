const testimonials = [
  {
    name: 'Chrise G',
    photoUrl:
      'https://images.unsplash.com/photo-1543965860-82ed7d542cc4?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: `I couldn't be happier with the bananas I received from Banana! Their top-quality fruit is always fresh and delicious, making it a perfect snack for any time of the day!`,
  },
  {
    name: 'Samantha Johnson',
    photoUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: `I am really impressed with the wide variety of bananas available at Banana! The quality is superb and the customer service is top-notch. Ihighly recommend Banana for all your banana needs.`,
  },
  {
    name: 'Daniel Green',
    photoUrl:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: `Banana offers a fantastic selection of ripe and delicious bananas that are always fresh. The quality and taste are unmatched, making it my go-to choice for all things banana-related.`,
  },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

let idx = 0;
function updateTestimonail() {
  const { name, photoUrl, text } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerText = ` - ` + text;
  usernameEl.innerText = `- ` + name;
  idx++;
  if (idx === testimonials.length) idx = 0;
  setTimeout(() => {
    updateTestimonail();
  }, 5000);
}

updateTestimonail();
