const amazon = {
  images: [
    { src: 'https://imgur.com/MBK7hQU.png' },
    { src: 'https://i.imgur.com/AX8YzoG.png' },
    { src: 'https://i.imgur.com/jR4TO0S.png' },
  ],
  title: 'AMAZON SYSTEM DESIGN',
  url: 'https://docs.google.com/presentation/d/10qseyfegiWEMIQX8gebnRM7PbF4t7S0PDjhgjaMNVfE/edit?usp=sharing',
  github: 'https://github.com/allen-bui/amazon-system-design',
  description: `This project was focused on improving the backend performance of an existing microservice. I chose to improve another engineer's Amazon product microservice. I tinkered with the optimization a lot by swapping out the existing Mongo database with PostgreSQL and Cassandra to see if it would make a difference. After choosing a database, I put the microservice on an EC2 instance and played with vertical scaling to see if I could optimize query speeds. I was able to push my system to 1000 requests per second (RPS) with a 0% error rate on the free tier of my EC2 instance. I'm pretty happy with how everything turned out because this was my first backend focused project.`,
  techStack: `Node.js, Express, Cassandra, PostgreSQL, AWS EC2`,
};

export default amazon;