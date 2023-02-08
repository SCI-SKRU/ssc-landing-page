import { Box, Card, Avatar, CardContent, Typography } from "@mui/material";
import theme from "../config/Theme";


export enum Side {
    Left,
    Right
}



export function ItemConten(data: { id: string | null, title: string, subtitle: string, side: Side }) {
    return (
        <>
            <Box id={data.id}>
                <Box sx={{
                    display: "flex",
                    textAlign: data.side === Side.Left ? "left" : "right",
                    alignItems: data.side === Side.Left ? "left" : "right",
                    justifyContent: data.side === Side.Left ? "flex-start" : "flex-end",
                    padding: "40px 10px",
                    marginBottom: "20px",
                    marginRight: data.side === Side.Left ? "30%" : "20px",
                    marginLeft: data.side === Side.Left ? "20px" : "30%",

                    [theme.breakpoints.down("md")]: {
                        padding: "20px 10px",
                        marginRight: "10px",
                        marginLeft: "10px",
                    },

                    [theme.breakpoints.down("sm")]: {
                        textAlign: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    },

                }}>
                    <Avatar
                        sx={{
                            height: 200, width: 200, marginRight: "30px",
                            display: data.side === Side.Left ? "flex" : "none",
                            [theme.breakpoints.down("sm")]: {
                                display: "flex",
                                marginRight: "0"
                            },

                        }}
                        src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
                    />
                    <CardContent>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h5">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                &emsp;&emsp;{data.subtitle}
                            </Typography>
                        </Box>
                    </CardContent>

                    <Avatar
                        sx={{
                            height: 200, width: 200, marginLeft: "30px",
                            display: data.side === Side.Left ? "none" : "flex",

                            [theme.breakpoints.down("sm")]: {
                                display: "none",
                            },

                        }}
                        src="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
                    />
                </Box>
            </Box>
        </>
    );
}