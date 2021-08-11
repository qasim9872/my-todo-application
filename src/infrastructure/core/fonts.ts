import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useFonts as useRubik, Rubik_700Bold } from "@expo-google-fonts/rubik";

export const useFonts = () => {
  //Poppins:wght@400;500;600;700&family=Rubik:wght@700
  const [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const [rubikLoaded] = useRubik({
    Rubik_700Bold,
  });

  return poppinsLoaded && rubikLoaded;
};
