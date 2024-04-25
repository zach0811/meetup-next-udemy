import MeetupDetail from "../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image=""
      title="First Meetup"
      address="123 New St"
      description="Meetup Description"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image: "",
        title: "First Meetup",
        address: "123 New St",
        description: "Meetup Description",
      },
    },
  };
};

export default MeetupDetails;
