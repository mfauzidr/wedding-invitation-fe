// pages/Invitation.tsx
import invitationImage from '../assets/images/image-2.jpg'


interface Username {
  username: string;
}

const Invitation = ({ username }: Username) => {
  return (
    <div className="w-full h-screen bg-maroon">
      <div className="relative h-2/3 w-full">
        <img src={invitationImage} className="w-full h-full" alt="Invitation" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-maroon to-transparent"></div>
      </div>



    </div>
  );
};

export default Invitation;
