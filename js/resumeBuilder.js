/*
This is empty on purpose! Your code to build the resume will go here.
 */


var model = {

    bio: {
        name: 'Danila',
        role: 'Web Developer',
        contacts: {
            mobile: '+79214447344',
            email: "exenoobe@gmail.com",
            github: "https://github.com/vo0doo",
            location: "Sankt-Petersburg"
        },
        welcomeMessage: "Hello im Vo0doo !!!",
        skills: ['JS', 'Python', 'Linux', 'SQL'],
        biopic: "https://pp.userapi.com/c637121/v637121478/3d9e7/V7fwy8CPllQ.jpg",
        display: function () {
            return model.bio
        }
    },

    education: {
        schools: [{
            name: "Medium Shool of Kirishi",
            location: "Kirishi",
            degree: "Medium skill",
            majors: ['3', '4', '5'],
            dates: "01-06-2006"
        }],

        onlineCourses:
            [
            {
                title: "JS desing patern",
                school: 'Udacity',
                dates: '01-01-2016',
                url: "https://classroom.udacity.com/courses/ud989"
        },
            {
                title: "Full Stack Web Dev",
                school: "Udacity",
                dates: "01-01-2017",
                url: "https://classroom.udacity.com/courses/ud088"

            }],
        display: function () {
            return model.education
        }
    },

    work: {
        jobs: [{
            employer: "Manager",
            title: "BK",
            location: "Sankt-Peterburg",
            dates: "01-12-2015",
            description: "Director in more DB pos"
        }],

        display: function () {
            return model.jobs
        }
    },

    projects: [{
        title: "curiosity-to-vk",
        dates: "01-01-2017",
        description: "Parse, translate and post in vk.com very nice curiosity post",
        images: ["https://d3ujx5pfllvtqb.cloudfront.net/static/images/spriteable/curiosity-logo.png"]
    }],
    display: function () {
        return model.projects
    }
};

var octopus = {

    init: function () {
        viewHeader.init();
    },

    getBio: function () {
        return model.bio
    }

};

var viewHeader = {

    init: function () {
        this.headerElem = $('#header');
        this.headerContactsElem = $('#topContacts');
        viewHeader.render();
    },

    render: function () {

        var bio = octopus.getBio();

        this.headerElem.prepend(HTMLheaderRole.replace('%data%', bio.role));
        this.headerElem.prepend(HTMLheaderName.replace('%data%', bio.name));


        this.headerContactsElem.append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        this.headerContactsElem.append(HTMLemail.replace('%data%', bio.contacts.email));
        this.headerContactsElem.append(HTMLgithub.replace('%data%', bio.contacts.github));
        this.headerContactsElem.append(HTMLlocation.replace('%data%', bio.contacts.location));

        this.headerElem.append(HTMLbioPic.replace('%data%', bio.biopic));
        this.headerElem.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        this.headerElem.append(HTMLskillsStart);

        for (i=0; i<bio.skills.length;i++){
            $('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
        }
    }

};

octopus.init();