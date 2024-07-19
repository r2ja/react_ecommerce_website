import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Typography } from "@mui/material";
import DOMPurify from "dompurify";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const sanitizedValues = {
      name: DOMPurify.sanitize(values.name),
      email: DOMPurify.sanitize(values.email),
      subject: DOMPurify.sanitize(values.subject),
      message: DOMPurify.sanitize(values.message),
    };

    console.log(sanitizedValues);

    setTimeout(() => {
      alert(JSON.stringify(sanitizedValues, null, 2));
      setSubmitting(false);
      resetForm();
    }, 400);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Got Questions?
        </Typography>

        <Typography paragraph>
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                name="name"
                label="Your Name"
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
              />
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                name="email"
                label="Your Email"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                name="subject"
                label="Subject"
                error={touched.subject && !!errors.subject}
                helperText={touched.subject && errors.subject}
              />
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                name="message"
                label="Your Message"
                multiline
                rows={4}
                error={touched.message && !!errors.message}
                helperText={touched.message && errors.message}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
                style={{ marginTop: "1rem" }}
              >
                SEND
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
