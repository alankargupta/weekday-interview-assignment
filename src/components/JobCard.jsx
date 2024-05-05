import {
  Card,
  CardContent,
  Typography,
  Link,
  Button,
  rgbToHex,
  DialogTitle,
  IconButton,
  DialogContent,
  Dialog,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/material";
import "./jobcard.css";
import { styled } from "@mui/material/styles";
import { Close } from "@mui/icons-material";

function JobCard({ data }) {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  const [showDialog, setShowDialog] = useState(false);
  const handleClose = () => {
    setShowDialog(false);
  };
  return (
    <Card
      sx={{
        height: 400,
        width: 300,
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 4,
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <img src={data.logoUrl} alt="company logo" height={40} width={25} />
          <Box>
            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  color: "#8b8b8b",
                  fontWeight: 600,
                  letterSpacing: 1,
                  marginLeft: 2,
                }}
              >
                {data.companyName}
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: 1.5,
                  marginLeft: 2,
                }}
              >
                {data.jobRole}
              </Typography>
            </Box>
            <Typography fontSize={11} fontWeight={500} marginLeft={2}>
              {data.location}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Typography>About Company</Typography>
          <Typography className="fadeText">
            {data.jobDetailsFromCompany}
          </Typography>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setShowDialog(true);
            }}
            sx={{ marginLeft: "90px" }}
          >
            Job Description
          </Link>
        </Box>
        {showDialog ? (
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={showDialog}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
              Job Description
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <Close />
            </IconButton>
            <DialogContent dividers>
              <Typography gutterBottom>{data.jobDetailsFromCompany}</Typography>
            </DialogContent>
          </BootstrapDialog>
        ) : null}
        <Box sx={{ marginTop: "10px" }}>
          <Typography
            sx={{
              color: "#8b8b8b",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              marginBottom: "3px",
            }}
          >
            Minimum Experience
          </Typography>
          <Typography
            sx={{ fontSize: "14px", lineHeight: 1.5, fontWeight: 400 }}
          >
            {data.minExp ? data.minExp : "-"} years
          </Typography>
        </Box>
        <Button
          sx={{
            marginTop: "20px",
            width: "100%",
            height: "40px",
            bgcolor: rgbToHex("rgb(85,239,196)"),
            color: "black",
            padding: "8px 18px",
            textTransform: "none",
          }}
        >
          Eazy Apply
        </Button>
      </CardContent>
    </Card>
  );
}

export default JobCard;
