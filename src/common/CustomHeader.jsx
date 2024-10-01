import { StyledView, StyledText } from '@common/StyledComponents';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { StyledImage, StyledTouchableOpacity } from './StyledComponents';
import GoBack from '@icons/GoBack.png';
import HomeIcon from '@icons/logo2.png'; 

const CustomHeader = ({ title }) => {
  const navigation = useNavigation();
  const route = useRoute(); 

  const canGoBack = navigation.canGoBack();
  
  const isHomePage = route.name === 'HomePage';
  const isDetailPage = route.name === 'DetailsPage';
  const isProfilePage = route.name === 'ProfileScreen';
  const isBasket = route.name === 'Basket';

  const showGoBackButton = canGoBack && !isHomePage && !isProfilePage && !isBasket;  
  const backgroundColorClass = (isHomePage || isDetailPage) ? 'bg-gray-50' : 'bg-violet-400';

  return (
    <StyledView className={`w-full flex-row ${backgroundColorClass} items-center`}>
      {showGoBackButton && (
        <StyledTouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute left-3 top-5 flex-row items-center justify-center" 
        >
          <StyledImage source={GoBack} style={{ width: 30, height: 30 }} />
        </StyledTouchableOpacity>
      )}

    
      {isHomePage && (
        <StyledImage 
          source={HomeIcon} 
          style={{ width: 30, height: 30, marginLeft: 10 }} 
        />
      )}

      <StyledText className={`flex-1 text-${isHomePage ? 'left' : 'center'} text-black font-bold text-[20px] pb-5 pt-6 ml-5`}>
        {!isDetailPage && title}
      </StyledText>
    </StyledView>
  );
};

export default CustomHeader;
