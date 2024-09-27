import React from "react";
import { Avatar, Card, CardActionArea, CardContent, CardHeader, Container, Grid, Typography } from "@material-ui/core";
import { Chat as ChatIcon, History as HistoryIcon, Settings as SettingsIcon, Info as InfoIcon } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import AdminAppBar from "../components/AdminAppBar";
import AdminToolbar from "../components/AdminToolbar";

const AIChatbot = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {/* App Bar with Title */}
      <AdminAppBar>
        <AdminToolbar title={t("chatbot.title")} />
      </AdminAppBar>

      {/* Main Chatbot Container */}
      <div className="flex items-center justify-center w-full">
        <div className="m-2 w-full md:w-1/2 lg:3/4 border flex flex-col rounded-t-xl">
          <header className="w-full bg-primary-500 flex justify-between px-2 py-1 rounded-t-lg items-center">
            <h2 className="text-sm font-semibold text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-6" viewBox="0 0 24 24">
                <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <path d="M4 15.5a2 2 0 1 1 0-4m16 4a2 2 0 1 0 0-4M7 7V4m10 3V4" />
                  <circle cx="7" cy="3" r="1" />
                  <circle cx="17" cy="3" r="1" />
                  <path d="M13.5 7h-3c-2.828 0-4.243 0-5.121.909S4.5 10.281 4.5 13.207s0 4.389.879 5.298c.878.909 2.293.909 5.121.909h1.025c.792 0 1.071.163 1.617.757c.603.657 1.537 1.534 2.382 1.738c1.201.29 1.336-.111 1.068-1.256c-.076-.326-.267-.847-.066-1.151c.113-.17.3-.212.675-.296c.591-.132 1.079-.348 1.42-.701c.879-.91.879-2.372.879-5.298s0-4.389-.879-5.298C17.743 7 16.328 7 13.5 7" />
                  <path d="M9.5 15c.57.607 1.478 1 2.5 1s1.93-.393 2.5-1m-5.491-4H9m6.009 0H15" />
                </g>
              </svg>
              {t("chatbot.title")}
            </h2>
            <span className="text-white aspect-square w-8 cursor-pointer p-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414" />
              </svg>
            </span>
          </header>

          <div className="flex flex-col gap-4 p-2 select-none">
            <div className="flex items-end">
              <div className="rounded bg-primary-500 w-8 aspect-square p-1.5">
                <ChatIcon style={{ color: "#fff" }} />
              </div>
              <p className="mx-2 p-2 rounded bg-gray-200 leading-4 text-sm">
                Hi there 👋<br />
                {t("chatbot.greeting")}
              </p>
            </div>

            <div className="flex items-end flex-row-reverse">
              <div className="rounded bg-primary-500 w-8 aspect-square p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <path
                    fill="#ffffff"
                    d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
                  />
                </svg>
              </div>
              <p className="mx-2 p-2 rounded bg-gray-200 leading-4 text-sm">
                Hi there 👋<br />
                {t("chatbot.reply")}
              </p>
            </div>
          </div>

          <div className="flex items-center my-2 mx-1">
            <textarea
              id="chat"
              rows="1"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder={t("chatbot.placeholder")}
            />
          </div>
        </div>
      </div>

      {/* Grid Layout for Chatbot Menu */}
      <Container maxWidth="md">
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {/* Chat Interface */}
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardActionArea component={RouterLink} to={`/${process.env.PUBLIC_URL}/admin/chat`}>
                <CardHeader avatar={<Avatar aria-label="Chat icon"><ChatIcon /></Avatar>} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {t("chatbot.menu.chat")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Conversation History */}
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardActionArea component={RouterLink} to={`/${process.env.PUBLIC_URL}/admin/history`}>
                <CardHeader avatar={<Avatar aria-label="History icon"><HistoryIcon /></Avatar>} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {t("chatbot.menu.history")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Chatbot Settings */}
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardActionArea component={RouterLink} to={`/${process.env.PUBLIC_URL}/admin/settings`}>
                <CardHeader avatar={<Avatar aria-label="Settings icon"><SettingsIcon /></Avatar>} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {t("chatbot.menu.settings")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Info Section */}
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardActionArea component={RouterLink} to={`/${process.env.PUBLIC_URL}/admin/info`}>
                <CardHeader avatar={<Avatar aria-label="Info icon"><InfoIcon /></Avatar>} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {t("chatbot.menu.info")}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AIChatbot;
