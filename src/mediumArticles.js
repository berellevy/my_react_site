const articles = [
  {
    title: "Out-Of-This-World Django DX",
    text: "How to set up the Jupyter Notebook VSCode extension in Django.",
    href: "https://blog.stackademic.com/out-of-this-world-django-dx-e26612a38fd6",
  },
  {
    title: "Adding Star Power to Django QuerySets",
    text: "Adding the convenience of SQL’s SELECT * to Django’s QuerySet.values().",
    href: "https://berellevy.medium.com/adding-star-power-to-django-querysets-e939bbb503a8",
  },
  {
    title: "Pause/Play YouTube with Your Keyboard!",
    text: "Let's make a keyboard shortcut that you can click in any active window that will pause your YouTube tutorial.",
    href: "https://medium.com/@berellevy/pause-play-youtube-with-your-keyboard-b747029f9f4a",
  },
  {
    title: "Closure in JavaScript",
    text: "what is closure? There's a short answer and a long answer.",
    href: "https://medium.com/@berellevy/closure-in-javascript-d04fe11d81c3",
  },
  {
    title: "Introducing FauxMeaux 2.0 (patent pending)",
    text: "A new concept in social media advertising that will benefit all parties involved.",
    href: "https://medium.com/@berellevy/introducing-fauxmeaux-2-0-patent-pending-6b1a14584ab3",
  },
]

export default articles

const parseXml = (xmlString) => {
  const parser = new DOMParser()
  return parser.parseFromString(xmlString, "application/xml")
}

export const getMediumArticles = async () => {
  const url = "https://berellevy.medium.com/feed"
  // const url = "./mediumArticles.xml"
  try {
    const res = await fetch(url, )
    const text = await res.text()

    parseXml(text)
  } catch (err) {
    console.log(err)
  }
}

