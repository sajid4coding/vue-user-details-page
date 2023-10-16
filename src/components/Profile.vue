<template>
    <div>

     <p class="m-2 p-2">
      <label for="name">Name:</label>
      <input v-model="user.name" id="name" class="w-full"/>
    </p>

    <p class="m-2 p-2">
        <h3>User Photo</h3>
        <img :src="user.image" :alt="user.image" />
    </p>

    <p class="m-2 p-2">
        <h3>Type your image link Here to Update your image</h3>
        
        <input v-model="user.image" type="text" class="w-full"/>
    </p>
    
    <p class="m-2 p-2">
      <label for="email">Email:</label>
      <input v-model="user.email" id="email" class="w-full" />
    </p>

    <p class="m-2 p-2">
      <label for="description">Description:</label>
      <textarea v-model="user.description" id="description" class="w-full"></textarea>
    </p>

      <p class="m-2 p-2">
        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" v-model="user.birthdate" @change="updateBirthYear" />
      </p>
  
      <p class="m-2 p-2">
        <label>Birth Year:</label>
        <span>{{ user.birthYear }}</span>
      </p>
  
      <!-- <p>Age: {{ user.age }}</p> -->
      <p class="m-2 p-2">
        <label>Voting Eligibility:</label>
        <span class="ml-5 font-bold ">{{ user.EligibleForVote }}</span>
        
      </p>
  
  
      <p class="text-left mb-20">
        <button @click="updateUser"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <span>Update User Profile</span>
        </button>
    </p>


    

    </div>
  </template>
  
  <script setup>
  import { reactive,ref, onMounted, watch, computed } from 'vue';
  
  const token = 'user';
  
  const user = reactive({
    name: 'Syed Numan',
    image: 'https://images.generated.photos/dVrq4AXS8SmlQ_HTyxG4bJRmi4IulUA4omUbvvSyQMU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkwODEzLmpwZw.jpg',
    birthdate: '1998-01-01',
    email: 'syed2002@example.com',
    description: "User Detail's here",
    // age: computed(() => {
    // const today = new Date();
    // const birthdate = new Date(user.birthdate);
    // return today.getFullYear() - birthdate.getFullYear();
    // }),
    birthYear: '',
    EligibleForVote: '',

  });
  
  
//   const birthYear = ref('');
//   const EligibleForVote = ref('');
  

  
  const updateBirthYear = () => {
    user.birthYear = calculateBirthYear();
    UpdateVotingMsg();
  };
  
  const calculateBirthYear = () => {

    if (user.birthdate) {
      const birthdate = new Date(user.birthdate);
     // alert(birthYear);
      return birthdate.getFullYear();
    }
    return "";
  };
  
  const UpdateVotingMsg = () => {
    const age = calculateAge();
    user.EligibleForVote = age >= 18 ? "Eligible for voting" : "Not eligible for voting";
  };
  
  const calculateAge = () => {
    if (user.birthdate) {
      const birthdate = new Date(user.birthdate);
      const currentDate = new Date();
      return currentDate.getFullYear() - birthdate.getFullYear();
    }
    return null;
  };

//   watch(() => user.age,(newAge) => {
//                 EligibleForVote.value = newAge >= 18 ? 'Eligible for voting' : 'Not eligible for voting';
//             }, {deep:true, immediate:true}
//         );
  

 const updateUser = () => {
    localStorage.setItem(token, JSON.stringify(user));
};

onMounted(() => {
  const storedUserData = localStorage.getItem('user');
  if (storedUserData) {
    Object.assign(user, JSON.parse(storedUserData));
    // updateVotingEligibility();
    // birthYear;
    // EligibleForVote;

  }
});
  
  watch(user, () => {
    updateUser();
  });

 
  </script>
  