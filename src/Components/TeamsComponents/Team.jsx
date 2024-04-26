import MemberCard from "./MemberCard";

const teamMembers = [
    {
        "name": "Sofia Richie",
        "positions": "Chief chef",
        "img": "https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/team4.png"
    },
    {
        "name": "Harvey Dent",
        "positions": "Chief chef",
        "img": "https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/team3.png"
    },
    {
        "name": "Emilia Clarke",
        "positions": "Chief chef",
        "img": "https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/team1.png"
    },
    {
        "name": "Sam Claflin",
        "positions": "Chief chef",
        "img": "https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/team2.png"
    },
    {
        "name": "Ivan Rakitic",
        "positions": "Chief chef",
        "img": "https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/team5.png"
    },
    {
        "name": "Emilia Clarke",
        "positions": "Chief chef",
        "img": "https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/team1.png"
    },
    {
        "name": "Arnolde jony",
        "positions": "Chief chef",
        "img": "https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/team8.png"
    },
    {
        "name": "Raoin Hoice",
        "positions": "Chief chef",
        "img": "https://demo-themewinter.com/gloreya/wp-content/uploads/2019/10/team7.png"
    },
]


const Team = () => {
    return (
        <div className="py-12 mb-10">
            <div className="space-y-7 max-w-4xl mx-auto mb-12 text-center text-white flex flex-col items-center justify-center">
                <h1 className='font-oswald text-4xl lg:text-5xl font-bold uppercase'>Behind the taste</h1>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="12"
                    fill="#FF9D00"
                    version="1.1"
                    viewBox="0 139.474 290.658 11.711"
                    xmlSpace="preserve"
                >
                    <path fill="#FF9D00" d="M0 139.474H290.658V151.185H0z"></path>
                </svg>
                <p className="text-neutral-400">Meet the team at Burger Valley! Discover the faces behind our delicious menu items and exceptional service. Get to know the passionate individuals who make your dining experience unforgettable.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <MemberCard
                        key={index}
                        name={member.name}
                        position={member.positions}
                        img={member.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;


