function getProfile() {
  return {
    name: "Surya",
    email: "surya@example.com"
  };
}

const profile = getProfile();

console.log("Nama:", profile.name);
console.log("Email:", profile.email);