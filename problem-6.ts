{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    type Partial = {
        name?: string;
        age?: number;
        email?: string;
    }

    const updateProfile  = (profile: Profile, partial: Partial) => {

        if (typeof partial.name === 'string') {
            profile.name = partial.name
            return { ...profile }
        } else if (typeof partial.age === 'number') {
            profile.age = partial.age
            return { ...profile }
        } else if (typeof partial.email === 'string') {
            profile.email = partial.email
            return { ...profile }
        } else {
            console.log('invalid input value');
        }
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));   
}