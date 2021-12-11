const initialUser = {
    username: "",
    email: "",
    favRecipeList: [],
    usersRecipe: [],
    usersFollowers: [],
    userAvatar: "/images/sample-user.jpeg",
    location: "",
    dateOfBirth: "",
    bio: "",
    role: "normal",
}

const userReducer = (state = initialUser, action) => {
    console.log("action: ")
    console.log(action)

    switch (action.type) {
        // after login
        case "set-user":
            state = action.newUser;
            console.log("after setting user", state);
            return state;

        case "get-user":
            console.log("state: ", state);
            state = action.newUser;
            return state;
        

        case "update-profile":
            const updatedProfile = {
                ...state.profile,
                userName: action.newProfile.userName,
                bio: action.newProfile.bio,
                location: action.newProfile.location,
                website: action.newProfile.website,
                dateOfBirth: action.newProfile.dateOfBirth,
            };
            
            state = {
                ...state,
                profile: updatedProfile,
            };
            
            return state;



        case "get-fav":
            break;


        default:
            console.log("in default ", state);
            return state;
    }
};

export default userReducer;

