// import { Text, View, ScrollView,SafeAreaView } from "react-native";
// import React from "react";
// import Flatcards from "../components/FlatCards";
// import Navbar from "../components/navbar";

// export default function Index() {
//   return (
//       <SafeAreaView>
//         <Navbar/>
//         <ScrollView>
//           <Flatcards/>
//         <Text>home</Text>
//         </ScrollView>
        
//       </SafeAreaView>
   
//   );
// }

// Index.tsx
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Navbar from "../components/navbar";

const Index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Navbar/>
        <ProfileCard
          name="AnuradhaM"
          expertise="Vedic, Numerology, Vastu"
          language="Tamil"
          experience="Exp: 2 Years"
          rate="20"
          orders="14390"
          imageUrl="https://ik.imagekit.io/demo/tr:di-medium_cafe_B1iTdD0C.jpg/non_existent_image.jpg"
          isNew={false}
        />
        <ProfileCard
          name="Bupathi"
          expertise="Vedic, Nadi"
          language="Tamil"
          experience="Exp: 6 Years"
          rate="18"
          orders="20227"
          imageUrl="https://ik.imagekit.io/demo/tr:di-medium_cafe_B1iTdD0C.jpg/non_existent_image.jpg"
          isNew={true}
        />
        <ProfileCard
          name="Mahipathim"
          expertise="Vedic, Nadi"
          language="Tamil"
          experience="Exp: 5 Years"
          rate="18"
          orders="20227"
          imageUrl="https://ik.imagekit.io/demo/tr:di-medium_cafe_B1iTdD0C.jpg/non_existent_image.jpg"
          isNew={true}
        /><ProfileCard
        name="ShanmuggaS"
        expertise="Vedic"
        language="Tamil , English"
        experience="Exp: 6 Years"
        rate="18"
        orders="22111"
        imageUrl="https://ik.imagekit.io/demo/tr:di-medium_cafe_B1iTdD0C.jpg/non_existent_image.jpg"
        isNew={true}
      /><ProfileCard
      name="Sendham"
      expertise="Vedic"
      language="Tamil, Hindi"
      experience="Exp: 8 Years"
      rate="12"
      orders="20217"
      imageUrl="https://ik.imagekit.io/demo/tr:di-medium_cafe_B1iTdD0C.jpg/non_existent_image.jpg"
      isNew={true}
    />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
