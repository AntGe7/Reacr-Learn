function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
   function Gallery() {
  return (
    <section>
    <h1>了不起的科学家们</h1>
    <Profile />
    <Profile />
    <Profile />
  </section>
  );
}

export default Gallery()