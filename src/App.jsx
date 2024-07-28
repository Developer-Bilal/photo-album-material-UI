import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";

import { PhotoCamera } from "@mui/icons-material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera style={{ marginRight: "20px" }} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              marginTop={"20px"}
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nobis aut cupiditate pariatur harum nihil animi qui est quo
              tenetur?
            </Typography>
            <div style={{ marginTop: "40px" }}>
              <Grid
                container
                spacing={2}
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Contact Me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container style={{ padding: "20px 0" }} max-width="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    style={{
                      paddingTop: "56.25%",
                    }}
                    image="https://picsum.photos/1000/1000"
                    title="Image title"
                  />
                  <CardContent style={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Veritatis, culpa.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer
        style={{
          padding: "50px 0",
          background: "#eee",
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur.
        </Typography>
      </footer>
    </>
  );
}

export default App;
