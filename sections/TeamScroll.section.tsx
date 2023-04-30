import DualColumnScroller from "@/components/DualColumnScroller";
import content from "@/content/content";

const TeamScrollSection = () => {
  const teamMembers = content.teamCounters.map((team, index) => {
    return {
      id: index,
      leftPanel: `${team.label}`,
      rightPanel: (
        <div className="flex justify-center items-center flex-col">
          <h1 className="clamp-text-5xl font-bold text-shark-50">
            {team.number}
          </h1>
          <p className="clamp-text-lg text-shark-100">{team.label}</p>
        </div>
      ),
    };
  });

  return <DualColumnScroller content={teamMembers} />;
};

export default TeamScrollSection;
