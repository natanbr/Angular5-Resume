export class DataResume {
    static data =
    {
      Name: 'Nikita (Natan) Braslavski',
      Description: 'Developer and software architect',
      // tslint:disable-next-line:max-line-length
      Summary: `Challenge driven software engineer, passionate developer with wide spectrum of knowledge in technology including web and cloud, distributed systems, android, validation and automations.
      A good experience with .NET and C# application development accompanied with proven record of design software architecture for highly complex projects, and technical leadership.
      `,
      Study: [
        {
          title: 'MA Software Engineer',
          time: '2014-2016',
          tags: ['Distributed algorithms', 'Agile methodologies', 'Systems modeling', 'systems UX',
            'JavaScript', 'Node.js', 'Information Security'],
          // tslint:disable-next-line:max-line-length
          summery: 'Final project: SenseWork – Sensing cloud service data collection of participatory mobile devices. Still working on publishing an essay',
          link: ''
        },
        {
          title: 'BA Software Engineer',
          time: '2010-2014',
          tags: ['Software design', 'Algorithms' , 'AI', 'Java' , 'C++' , 'Android' , 'Microcomputer assembler', 'and more...'],
          summery: 'Final Project: Software and Hardware emulation for testing FPGA systems',
          link: ''
        },
      ],
      Projects: [
        {
          title: 'Backend developer at PurposeFive',
          time: '2017',
          tags: ['Node.js (Express.js, Passport)', 'Mongo', 'Git', 'Heroku', 'OAuth2'],
          summery: `Developing cloud\web service application providing RESTful
          API for secure file distribution across storage providers (Dropbox, Google Drive, One Drive).`,
          link: ''
        },
        {
          title: 'Developer at Intel',
          time: '2017',
          tags: ['Java', 'Eclipse', 'EMF\\GMF', 'JS', 'Node.js', 'React', 'Full-stack', 'MongoDB', 'Git'],
          summery: `Providing software solutions for Intel product groups;
          Development of a product modeling for Network Communication hardware chip. Development of web activity
          Dashboard.`,
          link: ''
        },
        {
          title: 'Tech leading infrastructure development for automated flows ',
          time: '2017-2016',
          tags: ['Tech-lead', 'C#', '.NET', 'UX', 'WPF', 'RESTful API', 'CI'],
          summery: ` Responsible on
          developing a product, collecting of requirements/features and leading the team in adopting industry standards
          for software development`,
          link: ''
        },
        {
          title: 'Automation infrastructure developer and validation of SoFIA',
          time: '2016-2014',
          tags: ['C#', 'Validation strategies', 'CI', 'Windows drivers', 'HW'],
          summery: 'Validation of windows mobile secure boot and file system in Intel’s SoFIA project.',
          link: ''
        },
        {
          title: 'Automation infrastructure developer and validation of MFA',
          time: '2014-2013',
          tags: ['C#', 'Java', 'Android', 'Validation', 'CI', 'HW'],
          summery: 'Developing Infrastructures and creating test plan for MFA software security feature.',
          link: ''
        },
        {
          title: 'Academic teaching assistant',
          time: '2013',
          tags: ['Teaching', 'Distributed systems', 'JavaScript', 'Node.js'],
          summery: 'Academic teaching assistant at JCE at “Distributed systems” course',
          link: ''
        },
        {
          title: 'NFC Software and FW validation',
          time: '2013-2012',
          tags: ['C#', 'Validation', 'Windows drivers', 'HW'],
          summery: '(Student position) Developing testing tools and infrastructure for Intel’s NFC',
          link: ''
        }
      ]
    };

    static getData() {
      return this.data;
    }
}
