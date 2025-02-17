const user = {
    profile: {
      name: 'John'
    }
  };
  // Without optional chaining
  console.log(user.profile.name); // "John"
  console.log(user.address.city); // TypeError: Cannot read property 'city' of undefined
  