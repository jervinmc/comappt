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
    <v-form ref="form">
      <v-card class="pa-10" elevation="5">
        <div class="text-h6 pb-5">References</div>
        <v-text-field label="Title" outlined v-model="title" />
        <v-textarea label="Subtitle" outlined v-model="subtitle" />
        <v-textarea
          outlined
          v-model="description"
          label="Tell something about ..."
        />
        <form
          class="py-10"
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
        <v-row>
          <v-col align="end">
            <v-btn width="150" @click="clearData"> Cancel </v-btn>
          </v-col>
          <v-col align="start">
            <v-btn
              width="150"
              :loading="isLoaded"
              color="primary"
              @click="addFile"
            >
              Save
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import Snackbar from "../general/Snackbar.vue";
export default {
  components: { Snackbar },
  data() {
    return {
      snackbar: false,
      description: "",
      subtitle: "",
      isLoaded: false,
      title: "",
      upload: {},
      file: "",
      files: "",
      url: "",
      pdf_file: "",
    };
  },
  methods: {
    //  ...mapActions("nomad",["addNomad"]),
    async submitHandler(val) {
      this.upload = {
        description: this.description,
        subtitle: this.subtitle,
        title: this.title,
        image: val.filename,
      };
      await this.$store.dispatch("uploadFile", this.upload);
      this.isLoaded = false;
      this.snackbar = true;
      this.clearData();
    },
    uploadFile(e) {
      this.file = e[0];
      console.warn(this.file);
    },
    async addFile() {
      this.isLoaded = true;
      if (this.file == "") return this.submitHandler({ filename: null });
      let form_data = new FormData();
      form_data.append("file", document.getElementById("file").files[0]);
      const response = await this.$axios.post("", form_data, {
        baseURL: `http://54.164.128.119:5000/api/v1/uploadtest`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // this.clearData()
      this.submitHandler(response.data);
    },
    clearData() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>