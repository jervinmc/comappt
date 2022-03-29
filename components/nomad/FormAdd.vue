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
    <div class="text-h6 pb-5">Master File</div>
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
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-text-field v-model="firstname" label="Firstname" outlined />
            <v-text-field v-model="lastname" label="Lastname" outlined />
            <v-text-field label="Middle Name" outlined v-model="middlename" />
            <v-text-field label="Suffix" outlined v-model="suffix" />
            <v-text-field label="Birthdate" outlined v-model="birthdate" />
            <v-text-field
              label="Birth Region"
              outlined
              v-model="birth_region"
            />
            <v-text-field
              label="Address Region"
              outlined
              v-model="address_region"
            />
            <v-row>
              <v-col align="end">
                <v-btn width="150" @click="clearData"> Cancel </v-btn>
              </v-col>
              <v-col align="start">
                <v-btn width="150" color="primary" @click="page = 2">
                  Continue
                </v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-text-field label="Birth Place" outlined v-model="birth_place" />
            <v-text-field label="Code" outlined v-model="filecode" />
            <v-text-field
              label="Retirement date"
              outlined
              v-model="retirement_date"
            />
            <v-text-field label="Title" outlined v-model="title" />
            <v-textarea outlined label="Subtitle" v-model="subtitle" />
            <v-textarea
              outlined
              label="Tell something about ..."
              v-model="description"
            />
            <form
              class="py-10"
              id="upload_form"
              role="form"
              enctype="multipart/form-data"
            >
              <input type="file" name="file" id="file" class="form-control"  @change="uploadFile" />
            </form>
            <v-row>
              <v-col align="end">
                <v-btn width="150" @click="page = 1"> Cancel </v-btn>
              </v-col>
              <v-col align="start">
                <v-btn
                  :loading="isLoaded"
                  width="150"
                  color="primary"
                  @click="addNomad"
                >
                  Save
                </v-btn>
              </v-col>
            </v-row>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState,
  },
  data() {
    return {
      snackbar: false,
      description: "",
      isLoaded: false,
      page: 1,
      firstname: "",
      lastname: "",
      middlename: "",
      suffix: "",
      filecode: "",
      birthdate: "",
      department: "",
      province: "",
      source: "",
      htel: "",
      region: "",
      subtitle: "",
      title: "",
      nomad: {},
      file: "",
      files: "",
      url: "",
      pdf_file: "",
      birth_place: "",
      birth_region: "",
      address_region: "",
      retirement_date: "",
    };
  },
  methods: {
    //  ...mapActions("nomad",["addNomad"]),
    async submitHandler(val) {
      this.nomad = {
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        suffix: this.suffix,
        birthdate: this.birthdate,
        code: this.filecode,
        subtitle: this.subtitle,
        title: this.title,
        image: val.filename,
        birth_place: this.birth_place,
        birth_region: this.birth_region,
        address_region: this.address_region,
        retirement_date: this.retirement_date,
        description: this.description,
      };
      await this.$store.dispatch("addNomad", this.nomad);
      this.isLoaded = false;
      this.snackbar = true;
      this.clearData();
    },
    uploadFile(e) {
      this.file = e[0];
    },
    async addNomad() {
     
      this.isLoaded = true;
      if (this.file == "") return this.submitHandler({ filename: null });
      let form_data = new FormData();
      form_data.append("file", document.getElementById("file").files[0]);
      const response = await this.$axios.post("", form_data, {
        baseURL: `http://fca3-122-53-220-107.ngrok.io/api/v1/uploadtest`,
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