<template>
  <div id="tasks" class="container">
    <div class="head">
      <h1 v-if="!isAddind" class="title">Tasks</h1>
      <h1 v-else class="title">Create new tasks</h1>
      
      <p :class="isAddind ? 'add_icon add_icon__go' : 'add_icon'" @click="() => {isAddind = !isAddind}">add</p>
    </div>

    <div v-if="isAddind" class="adding">
      <form class="form" @submit.prevent="submitForm" @reset.prevent="resetForm">
        <div class="form_item">
          <label for="title">title</label>
          <input id="title" class="input input_text" type="text" v-model="form.title" placeholder="title">
        </div>

        <div class="form_item">
          <label for="departments">departments</label>
          <select class="input input_select" name="departments" id="departments" v-model="form.department" :class="{'input_select__default': !form.department}">
            <option disabled class="option option_default" :value="null">department</option>
            <option class="option" v-for="(department, index) in departments" :key="index" :value="department">{{ department.name }}</option>
          </select>
        </div>
        
        <div class="form_item">
          <label for="personal">personal</label>
          <input id="personal" class="input input_cb" type="checkbox" v-model="form.personal">
        </div>
        
        <div v-if="form.personal" class="form_item">
          <label for="participant">participant</label>
          <select class="input input_select" name="participant" id="participant" v-model="form.participant" :class="{'input_select__default': !form.participant}">
            <option disabled class="option option_default" :value="null">participant</option>
            <option class="option" v-for="(participant, index) in participants" :key="index" :value="participant">{{ participant.name }}</option>
          </select>
        </div>

        <div class="form_item">
          <label for="type">type</label>         
          <select class="input input_select" name="type" id="type" v-model="form.type" placeholder="type" :class="{'input_select__default': !form.type}">
            <option disabled class="option option_default" :value="null">type</option>
            <option class="option" v-for="(type, index) in types" :key="index" :value="type.value">{{ type.label }}</option>
          </select>
        </div>
        
        <div class="form_item">
          <label for="type">deadline</label>         
          <VueDatePicker v-model="form.date"></VueDatePicker>
        </div>

        <div class="form_item">
          <label for="description">description</label>
          <textarea 
            id="description" 
            class="input input_ta" 
            v-model="form.description" 
            placeholder="task description" 
            @input="cta($event)">
          </textarea>
        </div>

        <div class="form_actions">
          <button type="submit" class="button button_success">create</button>
          <button type="reset" class="button button_cancel">reset</button>
        </div>
      </form>
    </div>

    <div class="content">
      <div class="task" v-for="(task, index) in tasks" :key="task.id">
        <div class="task_left">
          <p class="task_left__title">{{ task.title }}</p>
          <p class="task_left__description">{{ task.description }}</p>
        </div>
        
        <div class="task_right">
          <div class="task_right info">
            <p v-if="task.type === '1'" class="normal_type">{{ task.type }}</p>
            <p v-if="task.type === '3'" class="critical_type">{{ task.type }}</p>
            <p v-if="task.type === '2'" class="warn_type">{{ task.type }}</p>
            
            <p v-if="task.status === '1'" class="new_status">{{ task.status }}</p>
            <p v-if="task.status === '2'" class="actual_status">{{ task.status }}</p>
            <p v-if="task.status === '3'" class="done_status">{{ task.status }}</p>
          </div>

          <div class="task_right date">
            <div class="date_item">
              <p class="date_item__name">created:</p>
              <p class="date_item__val">{{ task.created_at }}</p>
            </div>
            <div class="date_item">
              <p class="date_item__name">deadline:</p>
              <p class="date_item__val">{{ task.deadline }}</p>
            </div>
          </div>
          
        </div>




      </div>

    </div>

  </div>
</template>

<script>
import { supabase } from '@/supabase'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import Task from './Task.vue'

export default {
  name: 'Tasks',
  components: { VueDatePicker },
  data: () => ({
    tasks: [],
    isAddind: true,
    form: {
      title: null,
      desc: null,
      type: null,
      date: null,
      time: null,
      department: null,
      participant: null,
      personal: false,
    },
    types: [
      {
        value: 1,
        label: 'normal'
      },
      {
        value: 1,
        label: 'warning'
      },
      {
        value: 3,
        label: 'critical'
      },
    ],

    departments: Array.from({ length: 10 }).map((_, idx) => ({
      id: `${idx + 1}`,
      name: `DEP_${idx + 1}`,
    })),
    participants: Array.from({ length: 5 }).map((_, idx) => ({
      id: `${idx + 1}`,
      name: `NaME_${idx + 1}`,
    })),


  }),
  mounted() {
    // this.getData();
  },
  computed: {
    currentUser() {
      return this.$store.state.data.currentUser;
    },
  },
  methods: {
    cta(e) {
      console.log(e);
    },
    getData() {
      supabase.from('tasks').select().then((res) => {
        if (res.data) {
          this.tasks = res.data;
        };
        if (res.error) {
          
        };
      });
    },
    resetForm() {
      Object.keys(this.form).forEach(element => {
        this.form[element] = null;  
      });
      console.log(this.form);
    },
    submitForm() {
      console.log(this.form);
      const dl = this.form.date + this.form.time;
      const data = {
        title: this.form.title,
        description: this.form.desc,
        type: this.form.type,
        deadline: dl,
        performer: {
          department: this.form.department,
          participant: this.form.participant,
        },
        status: 1,
        created_at: new Date().toISOString(),
        created_by: {
          user: {
            id: this.currentUser.id,
            name: this.currentUser.name
          },
          department: {
            id: this.currentUser.department.id,
            name: this.currentUser.department.name
          }

        }

      };
      console.log(data);
      // this.createTask(data);
    },

    createTask(data) {
      supabase.from('tasks').insert(data).then((res) => {
        console.log('###', res);
        if (res.data) {
          this.tasks = res.data;
        };
        if (res.error) {
          
        };
      });
    }
    
  }
}
</script>

<style lang="scss">
  @import '@/styles/vars.scss';

  #tasks {
    .head {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .add_icon {
        width: 42px;
        height: 42px;
        color: $gray;
        transition: 300ms;
        &__go {
          rotate: 45deg;
          color: $red;
        }
      }
      .title {
        user-select: none; 
      }
    }

    .adding {
      display: flex;
      align-items: center;
      justify-content: center;

      .form {
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;
    
        &_type {

        }

        &_deadline {
          .el-form-item__content {
            justify-content: space-between;
  
          }
        }
      }
    }


    .content {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .task {
        padding: 12px;
        width: 100%;
        height: 122px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: $bg;
        border-radius: 12px;
        box-shadow: $gray_light 0px 3px 6px, $gray_light 0px 3px 6px;
        cursor: pointer;

        &_left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          
          &__title {
            font-size: 28px;
            font-weight: 500;
          }
        }

        &_right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
          
          .date {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;
            
            &_item {
              width: 100%;
              display: flex;
              justify-content: space-between;
              gap: 4px;

              &__name {
                font-weight: 500;
              }
              &__val {
                font-weight: 300;
                color: $gray;
              }
            }
          }
        }

        .critical_type {
          color: $red;
        }
        .new_status {
          color: $blue;
        }
        .process_status, .warn_type {
          color: $yellow;
        }
        .done_status, .normal_type {
          color: $green;
        }

        p {
          user-select: none; 
        }
      }


    }

  }
  
</style>