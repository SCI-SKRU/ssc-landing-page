import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Link,
  List,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import theme from "./config/Theme";
import video from "./assets/videos/videoTitle.webm";
import imageView from "./assets/images/image-view.webp";
import SciCampImg from "./assets/images/thumbnails/SCICAMP_SSC.jpg";
import SciencesImg from "./assets/images/thumbnails/SCIENCES_SSC.jpg";
import SciTerestImg from "./assets/images/thumbnails/SCITEREST_SSC.jpg";
import StemImg from "./assets/images/thumbnails/STEM_SSC.jpg";
import { ItemConten, Side } from "./components/ItemConten";
import LOGO from "./assets/images/logo.webp";

export function App() {
  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "grid" }}>
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#000",
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                boxShadow: 3,
              },
            }}
          >
            <video
              autoPlay
              loop
              muted
              poster={imageView}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                opacity: 0.3,
                top: 0,
                left: 0,
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
            <Box
              sx={{
                position: "relative",
                float: "right",
                display: "inline-flex",
                flexDirection: "column",
                textAlign: "center",
                padding: "18% 10% 18% 10%",
                margin: "0 auto",
                textShadow: "2px 2px 10px #0000009A",
                color: "#f5f5f5",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  margin: "0 auto",
                  fontSize: 60,
                  fontWeight: "bold",
                  [theme.breakpoints.down("sm")]: { fontSize: 40 },
                }}
              >
                SPARKLING SCIENCE
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  margin: "0 auto",
                  fontSize: 20,
                  [theme.breakpoints.down("sm")]: { fontSize: 16 },
                }}
              >
                จุดประกายวิทยาศาสตร์ในตัวคุณ
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              margin: "30px 15% 30px 15%",
              [theme.breakpoints.down("md")]: { margin: "30px" },
              [theme.breakpoints.down("sm")]: { margin: "30px 10px 30px 10px" },
            }}
          >
            <Card
              sx={{
                display: "flex",
                padding: "2%",
                [theme.breakpoints.down("sm")]: { flexDirection: "column" },
              }}
            >
              <CardMedia
                component="img"
                alt="alt"
                sx={{ height: 200, objectFit: "scale-down" }}
                image={LOGO}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent>
                  <Typography variant="body2">
                    &emsp;&emsp;คณะวิทยาศาสตร์และเทคโนโลยี
                    มหาวิทยาลัยราชภัฏสงขลา ได้เปิดศูนย์บริการวิชาการ (Academic
                    Service Center Sci&Tech SKRU) ในชื่อ “SPARKLING SCIENCE:
                    SSC” <br />
                    จุดประกายวิทยาศาสตร์ในตัวคุณ โดย
                    มีวัตถุประสงค์เพื่อบริการวิชาการด้านวิทยาศาสตร์และเทคโนโลยีให้กับท้องถิ่นในหลากหลายมิติ
                    เช่น หลักสูตรฝึกอบรมระยะสั้น ได้แก่ STEM-SSC, SCICAMP-SSC
                    เป็นการจัดค่ายวิทยาศาสตร์ การอบรมครู นักเรียน
                  </Typography>
                  <Typography variant="body2">
                    &emsp;&emsp;นอกจากนี้ยังมีการให้ความรู้ทางด้านวิทยาศาสตร์และเทคโนยีผ่าน
                    SCITEREST-SSC เติมวิทย์คิดสนุกกับวิทยาศาสตร์รอบตัว และ
                    บริการให้คำปรึกษาในการพัฒนาผลิตภัณฑ์ต่าง ๆ
                    ด้วยวิทยาศาสตร์เทคโนโลยีและนวัตกรรม หรือ
                    ด้านโครงงานทางวิทยาศาสตร์สำหรับโรงเรียนระดับประถมและมัธยมศึกษา
                    ภายใต้ HANDS TO SCIENCES เป็นต้น
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Box>
          <Box
            sx={{
              margin: "80px 50px 50px 50px",
              [theme.breakpoints.down("md")]: { margin: "30px" },
              [theme.breakpoints.down("sm")]: { margin: "30px 10px 30px 10px" },
            }}
          ></Box>

          <ItemConten
            id="STEM"
            side={Side.Left}
            image={StemImg}
            title="สนุก กับ STEM-SSC"
            subtitle="STEM ย่อมาจาก Science, Technology, Engineering and Mathematics หรือการบูรณการความรู้ระหว่าง 4 สาขาวิชา ซึ่งได้แก่ วิทยาศาสตร์ เทคโนโลยี วิศวกรรมศาสตร์ และคณิตศาสตร์ โดยรูปแบบการเรียนรู้ที่นำเอาแกนหลักของสาขาวิชาเหล่านี้มาผสานรวมกันเรียกว่า สะเต็มศึกษา ซึ่งถือเป็นการบูรณาการระหว่างศาสตร์ต่าง ๆ (Interdisciplinary Integration) เพื่อนำเอาจุดเด่นของแต่ละสาขาวิชามาผสมผสานกันอย่างลงตัว โดยมุ่งเน้นไปที่ทักษะหรือการปฏิบัติจริง ไม่ใช่เพียงการเรียนทฤษฎีเท่านั้นความก้าวหน้าทางด้านเทคโนโลยีและวิทยาศาสตร์ ส่งผลให้โลกดิจิทัลและนวัตกรรมกลายเป็นส่วนสำคัญในการพัฒนาด้านต่าง ๆ ในโลกแห่งความจริง ดังนั้น เพื่อเป็นการตอบโจทย์การพัฒนาศักยภาพทรัพยากรบุคคลเพื่อรับมือกับการเปลี่ยนแปลงและความท้าทายของโลกยุคใหม่ ทักษะ STEM จึงเข้ามามีบทบาทสำคัญในการเรียนรู้ การทำงาน และการดำเนินชีวิตของผู้คนในปัจจุบัน SSC มีความพร้อมทั้งบุคลากรและเครื่องมืออุปกรณ์ทางวิทยาศาสตร์ ที่สามารถพัฒนาการเรียนรู้ของน้อง ๆ จากการปฏิบัติจริงผ่านรูปแบบกิจกรรม"
          />
          <ItemConten
            id="SCICAMP"
            side={Side.Right}
            image={SciCampImg}
            title="สนุก กับ SCICAMP-SSC"
            subtitle="ค่ายวิทยาศาสตร์ 3 วัน 2 คืน หรือ 2 วัน  1 คืน จะประกอบไปด้วยกิจกรรม การทำการทดลองในหัวข้อต่าง ๆ ในห้องปฏิบัติการ สาขา ฟิสิกส์ เคมี ชีววิทยา คอมพิวเตอร์ ที่ได้มาตรฐาน  และ กิจกรรมทางด้านคณิตศาสตร์ ที่มาพร้อมกับสาระความรู้ ความสนุก อัดแน่น นอกจากนี้ยังมีกิจกรรม ดูดาวที่หอดูดาวกลางคืน และกิจกรรมเพื่อสร้างความรู้ ความเข้าใจ ในวิทยาศาสตร์ อีกมากมาย"
          />
          <ItemConten
            id="SCITEREST"
            side={Side.Left}
            image={SciTerestImg}
            title="สนุก กับ SCITEREST-SSC"
            subtitle="เติมความรู้ พร้อมความสนุกไปกับ “เติมวิทย์คิดสนุก กับวิทย์รอบตัว” น้อง  ๆ จะได้เรียนรู้เกี่ยวกับการทดลองวิทยาศาสตร์ใกล้ตัวในสาขาวิทยาศาสตร์บริสุทธิ์และวิทยาศาสตร์ประยุกต์ น้อง ๆ สามารถส่งเรื่องวิทยาศาสตร์ที่น้อง ๆ สนใจอยากจะให้เราจัดให้  มาทางช่องทางนี้ได้เลยค่ะ"
          />
          <ItemConten
            id="HANDStoSCIENCE"
            side={Side.Right}
            image={SciencesImg}
            title="รับปรึกษาปัญหาทางวิทยาศาสตร์ กับ HAND TO SCIENCES-SSC"
            subtitle="หากท่านมีปัญหาเกี่ยวกับโครงงานวิทยาศาสตร์สำหรับโรงเรียนระดับประถมและมัธยมศึกษา หรือการพัฒนาผลิตภัณฑ์ต่าง ๆ ด้วย วิทยาศาสตร์ เทคโนโลยี และนวัตกรรม เรามีบริการให้คำปรึกษาค่ะ"
          />

          <Box sx={{ marginTop: "20px" }}>
            <Card
              id="CONTACT"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "100px 10px",
                // margin: "0px 0 0 0",
                [theme.breakpoints.down("sm")]: { padding: "20px 50px" },
              }}
            >
              <Typography variant="h5">
                พร้อมหรือยัง? ที่จะพบกับความมหัศจรรย์ ของโลกวิทยาศาสตร์
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontSize: 20,
                  padding: "15px 60px",
                  margin: "30px 0 10px 0",
                  width: "500px",
                  borderRadius: "16px",
                  [theme.breakpoints.down("sm")]: {
                    width: "300px",
                    fontSize: 16,
                  },
                }}
              >
                เข้ามาดูหลักสูตรอบรมก่อนสิ
              </Button>
              <Link
                href="#"
                sx={{ [theme.breakpoints.down("sm")]: { fontSize: 14 } }}
              >
                หรือติดต่อทีมงานของเราเพื่อสอบถามข้อมูลเพิ่มเติม
              </Link>
            </Card>
          </Box>

          <List
            sx={{
              // display: "flex",
              // flexDirection: "column",
              textAlign: "center",
              padding: "100px 250px",
              // margin: "0px 0 0 0",
              [theme.breakpoints.down("md")]: { padding: "80px 20px" },
              [theme.breakpoints.down("sm")]: { padding: "40px 20px" },
            }}
          >
            <Divider
              sx={{
                marginBottom: "50px",
                [theme.breakpoints.down("sm")]: { marginBottom: "30px" },
              }}
            />
            <Typography variant="h6">
              คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยราชภัฏสงขลา
            </Typography>
            <Typography variant="body2">
              160 ม.4 ถ.กาญจนวนิช ต.เขารูปช้าง อ.เมือง จ.สงขลา 90000
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Tel.074-260288 Fax.074-336920 Email: sciskru@gmail.com
            </Typography>
          </List>
        </Box>
      </ThemeProvider>
    </>
  );
}
