import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

import GalleryFImage from "../assets/images/Gallery-Image.png";
import GallerySImage from "../assets/images/Gallery-Image (1).png";
import GalleryTImage from "../assets/images/Gallery-Image (2).png";
import GalleryFOImage from "../assets/images/Gallery-Image (3).png";
import GalleryFFImage from "../assets/images/Gallery-Image (4).png";
import GallerySIImage from "../assets/images/Gallery-Image (5).png";
import GallerySEmage from "../assets/images/Gallery-Image (6).png";
import GalleryEImage from "../assets/images/Gallery-Image (7).png";
import GalleryNImage from "../assets/images/Gallery-Image (8).png";
import Image from "next/image";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Flex = styled.div({
  display: "flex",
  gap: 50,
  "@media(max-width: 1320px)": {
    gap: 40,
  },
  "@media(max-width: 1140px)": {
    gap: 35,
  },
  "@media(max-width: 960px)": {
    gap: 30,
  },
  "@media(max-width: 720px)": {
    gap: 25,
  },
  "@media(max-width: 540px)": {
    gap: 20,
  },
});
const PhotoMain = styled.div({
  paddingTop: "50px",
  flex: 1,
});

const ImageDiv = styled.div({
  paddingBottom: "40px",
  "@media(max-width: 1320px)": {
    paddingBottom: "35px",
  },
  "@media(max-width: 1140px)": {
    paddingBottom: "25px",
  },
  "@media(max-width: 960px)": {
    paddingBottom: "20px",
  },
  "@media(max-width: 720px)": {
    paddingBottom: "15px",
  },
  "@media(max-width: 540px)": {
    paddingBottom: "10px",
  },
});
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        sx={{
          "& .MuiTabs-flexContainer": {
            gap: "10px",
          },
          "& button": {
            borderRadius: "50px",
            backgroundColor: "rgba(248, 247, 251, 1)",
            color: "black",
            width: "150px",
            height: "50px",
            fontFamily: "",
            border: "none",
            "&.Mui-selected": {
              backgroundColor: "rgba(124, 113, 223, 1)",
              boxShadow: "none",
              color: "white",
            },
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Living room" {...a11yProps(2)} />
        <Tab label="Kitchen" {...a11yProps(3)} />
        <Tab label="Workspace" {...a11yProps(4)} />
        <Tab label="Outdoor" {...a11yProps(5)} />
        <Tab label="Bathroom" {...a11yProps(6)} />
        <Tab label="Home office" {...a11yProps(7)} />
        <Tab label="Dining room" {...a11yProps(8)} />
        <Tab label="Workspace" {...a11yProps(9)} />
        <Tab label="Kitchen" {...a11yProps(10)} />
        <Tab label="Living" {...a11yProps(11)} />
        <Tab label="Workspace" {...a11yProps(12)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>

          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={10}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={11}>
        <Flex>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryFOImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySEmage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GallerySImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryFFImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryEImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
          <PhotoMain>
            <ImageDiv>
              <Image src={GalleryTImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GallerySIImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
            <ImageDiv>
              <Image src={GalleryNImage} alt="" style={{ width: "100%" }} />
            </ImageDiv>
          </PhotoMain>
        </Flex>
      </CustomTabPanel>
    </Box>
  );
}
