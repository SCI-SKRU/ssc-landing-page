import { Box, Card, Avatar, CardContent, Typography } from "@mui/material";
import theme from "../config/Theme";
import { HashScroll } from "react-hash-scroll";

export enum Side {
  Left,
  Right,
}

export function ItemConten(data: {
  id: string | null;
  title: string;
  subtitle: string;
  side: Side;
  image: string | null;
}) {
  return (
    <>
      <HashScroll hash={"#" + data.id}>
        <Box
          sx={{
            display: "flex",
            textAlign: data.side === Side.Left ? "left" : "right",
            alignItems: data.side === Side.Left ? "left" : "right",
            justifyContent: data.side === Side.Left ? "flex-start" : "flex-end",
            padding: "40px 10px",
            marginBottom: "20px",
            marginRight: data.side === Side.Left ? "30%" : "150px",
            marginLeft: data.side === Side.Left ? "150px" : "30%",

            [theme.breakpoints.down("md")]: {
              padding: "20px 10px",
              marginRight: "10px",
              marginLeft: "10px",
            },

            [theme.breakpoints.down("sm")]: {
              textAlign: "center",
              alignItems: "center",
              flexDirection: "column",
            },
          }}
        >
          <Avatar
            sx={{
              height: 200,
              width: 200,
              marginRight: "30px",
              display: data.side === Side.Left ? "flex" : "none",
              [theme.breakpoints.down("sm")]: {
                display: "flex",
                marginRight: "0",
              },
            }}
            src={data.image!}
          />
          <CardContent>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5">{data.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                &emsp;&emsp;{data.subtitle}
              </Typography>
            </Box>
          </CardContent>

          <Avatar
            sx={{
              height: 200,
              width: 200,
              marginLeft: "30px",
              display: data.side === Side.Left ? "none" : "flex",

              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            }}
            src={data.image!}
          />
        </Box>
      </HashScroll>
    </>
  );
}
