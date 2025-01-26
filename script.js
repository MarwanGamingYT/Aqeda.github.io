/* General Reset */
body, h1, img {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #ffffff; /* White theme */
  color: #333333; /* Subtle text color */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

/* Hero Section */
.hero {
  width: 100%;
  text-align: center;
  background-color: #ffffff;
  padding: 20px 0;
  border-bottom: 1px solid #eeeeee; /* Subtle border for separation */
}

.hero h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Centered Image */
.main-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.center-image {
  max-width: 90%; /* Image adapts to screen size */
  height: auto;
  border-radius: 10px; /* Rounded corners */
}
