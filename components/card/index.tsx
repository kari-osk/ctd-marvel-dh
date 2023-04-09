import Link from "next/link";
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
  } from "@mui/material";
  
  interface IComic {
    id: number;
    title: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }
  
  interface IComicsProps {
    comics: IComic[];
  }
  
  const CardList = ({ comics }: IComicsProps) => {
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        paddingY={"2rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {comics?.map((comic) => (
          <Link href={`/comics/${comic.id}`} key={comic.id}>
            <Grid item>
              <Card
                sx={{
                  maxWidth: 200,
                  minHeight: 320,
                  cursor: 'pointer',
                  transitionProperty: "transform",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                }}
              >
                <CardMedia
                  component="img"
                  alt={`${comic.title} thumbnail`}
                  height="340"
                  image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
      
                <CardContent
                  sx={{
                    minHeight: 160,
                    color: "#343a40",
                    "&:hover": {
                      color: "#000"
                    }
                  }}
                >
                  <Typography gutterBottom variant="h3" component="div">
                    {comic.title}
                  </Typography>
                </CardContent>
  
                {/* <CardActions>
                  <Button size="small">+ informações</Button>
                </CardActions> */}
              </Card>
            </Grid>
          </Link>
        ))}
      </Grid>
    );
  };
  
  export default CardList;
  