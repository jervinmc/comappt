<template>
  <div>
    <v-snackbar
      top
      absolute
      bottom
      color="success"
      outlined
      centered
      v-model="snackbar"
    >
      Successfully Added

      <template v-slot:action="{ attrs }">
        <v-btn color="green" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div class="text-h6 pb-5">Appointment</div>
    <v-form ref="form">
      <v-stepper outlined v-model="page">
        <v-stepper-header>
          <v-stepper-step :complete="page > 1" step="1">
            Information Page 1
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step :complete="page > 2" step="2">
            Information Page 2
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3"> Information Page 3 </v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-text-field
              v-model="firstname"
              label="Firstname"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="lastname"
              label="Lastname"
              outlined
            ></v-text-field>
            <v-text-field
              label="Middle Name"
              outlined
              v-model="middlename"
            ></v-text-field>
            <v-text-field
              label="Suffix"
              outlined
              v-model="suffix"
            ></v-text-field>
            <v-text-field
              label="Date of Appointment"
              outlined
              v-model="dateOfAppointment"
            ></v-text-field>
            <v-text-field
              label="Position"
              outlined
              v-model="position"
            ></v-text-field>
            <v-btn @click="clearData"> Cancel </v-btn>
            <v-btn color="primary" @click="page = 2"> Continue </v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-text-field
              label="Date of Appointment Receive"
              outlined
              v-model="dateOfAppointmentReceived"
            ></v-text-field>
            <v-text-field
              label="Date of Meetings"
              outlined
              v-model="dateOfMeetings"
            ></v-text-field>
            <v-text-field
              label="Date of Documentary Requirements Received"
              outlined
              v-model="dateOfDocumentary"
            ></v-text-field>
            <v-text-field
              label="Code"
              outlined
              v-model="filecode"
            ></v-text-field>
            <v-text-field
              label="Type of Appointment"
              outlined
              v-model="typeOfAppointment"
            ></v-text-field>
            <v-text-field label="Rank" outlined v-model="rank"></v-text-field>
            <v-btn @click="page = 1"> Back </v-btn>
            <v-btn color="primary" @click="page = 3"> Continue </v-btn>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-text-field
              label="Opposition"
              outlined
              v-model="opposition"
            ></v-text-field>
            <v-text-field
              label="Action"
              outlined
              v-model="action"
            ></v-text-field>
            <v-text-field
              label="Date of Action"
              outlined
              v-model="dateOfAction"
            ></v-text-field>
            <v-text-field label="Title" outlined v-model="title"></v-text-field>
            <v-textarea
              label="Subtitle"
              outlined
              v-model="subtitle"
            ></v-textarea>
            <v-textarea
              label="Tell something about ..."
              outlined
              v-model="description"
            ></v-textarea>
            <form
              class="pb-5"
              id="upload_form"
              role="form"
              enctype="multipart/form-data"
            >
              <input
                type="file"
                @change="uploadFile"
                name="file"
                id="file"
                class="form-control"
              />
            </form>
            <v-btn @click="page = 2"> Back </v-btn>
            <v-btn :loading="isLoaded" color="primary" @click="addAppt">
              Save
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Snackbar from "../general/Snackbar.vue";
export default {
  components: { Snackbar },
  computed: {
    ...mapState,
  },
  data() {
    return {
      snackbar: false,
      dateOfAppointmentReceived: "",
      position: "",
      opposition: "",
      dateOfMeetings: "",
      dateOfDocumentary: "",
      statusOfDocumentary: "",
      page: 1,
      description: "",
      firstname: "",
      rank: "",
      lastname: "",
      middlename: "",
      suffix: "",
      filecode: "",
      dateOfAppointment: "",
      department: "",
      province: "",
      source: "",
      htel: "",
      region: "",
      subtitle: "",
      title: "",
      nomad: {},
      file: "",
      typeOfAppointment: "",
      files: "",
      url: "",
      pdf_file: "",
      action: "",
      dateOfAction: "",
      isLoaded: false,
    };
  },
  methods: {
    //  ...mapActions("nomad",["addNomad"]),
    async submitHandler(val) {
      this.appt3 = {
        dateOfAppointmentReceived: this.dateOfAppointmentReceived,
        position: this.position,
        opposition: this.opposition,
        dateOfMeetings: this.dateOfMeetings,
        dateOfDocumentary: this.dateOfDocumentary,
        statusOfDocumentary: this.statusOfDocumentary,
        rank: this.rank,
        dateOfAppointment: this.dateOfAppointment,
        action: this.action,
        typeOfAppointment: this.typeOfAppointment,
        dateOfAction: this.dateOfAction,
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        suffix: this.suffix,
        birthdate: this.dateOfAppointment,
        code: this.filecode,
        subtitle: this.subtitle,
        description: this.description,
        title: this.title,
        image: val.filename,
      };
      await this.$store.dispatch("addAppt", this.appt3);
      this.isLoaded = false;
      this.snackbar = true;
      this.clearData();
    },
    uploadFile(e) {
      this.file = e[0];
    },
    async addAppt() {
      this.isLoaded = true;
      if (this.file == "") return this.submitHandler({ filename: null });
      let form_data = new FormData();
      form_data.append("file", document.getElementById("file").files[0]);
      const response = await this.$axios.post("", form_data, {
        baseURL: `http://18.218.238.96:5000/api/v1/uploadtest`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      this.submitHandler(response.data);
    },
    clearData() {
      this.page = 1;
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>