import { Styledheader, ImageWrapper } from "./Header.styled";
import { Container, ContainerFull } from "../../helpers/Container.styled";
import { Icons } from "../../helpers/Constants";
import userImage from "./user_image.png";

const Header = ({ darkTheme, toggleTheme, user }) => {
  return (
    <ContainerFull>
      <Container>
        <Styledheader>
          <h1>Edvora</h1>
          <div>
            <i
              className={darkTheme ? Icons.darkIcon : Icons.lightIcon}
              onClick={() => toggleTheme(!darkTheme)}
            ></i>
            <span>{user.name}</span>
            <ImageWrapper>
              <img src={userImage} alt="user name" />
            </ImageWrapper>
          </div>
        </Styledheader>
      </Container>
    </ContainerFull>
  );
};

export default Header;
