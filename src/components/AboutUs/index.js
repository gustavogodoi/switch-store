import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-master">
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="aboutpage-us">
        <div className="about-gustavo">
          <div className="about-gustavo-image">
            <img
              class="about-gustavo-image"
              src="https://avatars2.githubusercontent.com/u/4819553"
              alt="Gustavo's profile pricture"
            />
          </div>
          <div className="about-gustavo-name">Gustavo Godoi</div>
          <div className="about-gustavo-links">
            <div className="about-gustavo-github">
              <a
                href="https://github.com/gustavogodoi"
                target="_blank"
                rel="noopener noreferrer"
                alt="GitHub"
              >
                <img
                  className="about-gustavo-github-image"
                  src="data:image/png;base64,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"
                  alt="GitHub"
                />
              </a>
            </div>
            <div className="about-gustavo-linkedin">
              <a
                href="https://www.linkedin.com/in/gugodoi/"
                target="_blank"
                rel="noopener noreferrer"
                alt="LinkedIn"
              >
                <img
                  className="about-gustavo-linkedin-image"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAExUlEQVRYR72Xe1BUVRzHv3d32WVXXorg8lBI0zSSLMfGnCYaR0fLGc3UUkfKSHsMjiMjmoQkhQSJDAwjk6WZha9SIzOKxobJHuTklCJijgry3F1WVhHYhV2WPc25J26cvdvuP9fOzJ2539/3d36/zz3n3r17BYwYKw/+8J4HnlTBg/iRcaXOiQrtKqgqjq2d99ZwTWH4ZPm+6suCICRNiI5EdNgoaDUqpfqKdVxuD6w9drRabSCENJxYv/AhGhcBlu6rKhCIsO3RyQm46/Sgy+GCa8ijKIBWrcJYgxbhOhX+vN4CIpDCyvWLskSAxeWn2hKN0fF9CIJjcEjRxt7FDEFqhGAQzRZr+9fpS8aLAIvKKklCfBxuDfDNHbZOdLdcF2tEJEyGIXKcInBRwWq0tHegauNSQQRYWHKCjDbGwenml32ivRWvpMwQm3589iKaRk1QBECnUeGOpQPVGcsZwPyiL4ghKkZWvGgOf8VbajsVAaBFHLfMOLPleQYwt/AoMUTFyoqXpsRxsU1nOxQEMKFm2yoGkJJ/iBii+WY0PjsmBKkPRopNK67YcM7cpxyAtQNns9cwgCfe/cwngGLdfBRyWDvwy9svMoDHd3xCDNHyH7+u+nPc1LHTZ4t60N6Du01XJI+uXlBIOBydbRi090pxbdhoGMaNhybYIENwWNvx2zsvM4DHtu8nNNF7HFk2nQutPlkv6gfCNdgxb5rkHf61HhdvtCA1ZSaSE/+9mWuvNuPwz3XoComDWqvjalHY33euYwAzsz7yCXB85SPcpBXHLog6cbQeRQumSl6jxYZJRnaveI++ASc2VNTAHmqUAfxR8CoDmLH1A2IYJ3/Gv0qdxU16tuK8pL09f/dL9YVr2Hv5rhdAKy7ueoMBJGeWE70PgG/T5nCTnjlQK2lvr6mrF3k110Q/Z+4UTBwbKuVa7vQirZJt3/Do72zFpd3pDCBpUxnRGxNkF3HmtSe52PwPf5K0t5d5+hLqTN2in2wMRfESfvtGzqU5/ZYWNJRuZABTN5YQvTFRBvBj+lwu9lR5jaT9eSE6Db5Zx8OPnMsAmnG1LIMBTEkvJsE+AGozFnAAc0q+l7Q/jyYF8gcszbhWvpkBTHq9yCfA+a2LOIBZu6ok7c+jSYF8CtC4dwsDSFxXQIJj7pNtQd32pVzs4Z2Vkvbn0aRA/oD5Jpr3ZzGA8Wn5ROcD4K/cFRzAtNzjkvbn0aRAvtN8E20HshlA7No8ojPKV+BG/ioO4P7so5L259GkQL7TchOmgzkMwLgml2hjJsq2oGVXKhdL2FohaX8eTQrku8xNsBzKZQBRq3OINmaSDKB990tcLD7zU0n782hSIN9lbsStI3kMIPKFbBLkA0BGpGBg0NwI2+f5DCBiRRbRjImFoNUr2OK/SxFXP9y3Teg+XsAAwpZtM+nCxsQMGSL+FwC1oxvOntvmnpOFsSJAyHNvloBgkyoyFoKGf28rTUTcTnhsJvpJVNr35fsZFIAeGv3izQ2AMFk1KgLQ6hXfDrrscPXDY+8GCLnef7o4CYCbNg8CQN+dQbqnN+RBrVkCQqKVvnKxniBYMeQ+5fxuTw79ZweglwMY/la8J835omQkgLgF/zSXvpbvMQQFoIf7bwzkyDzZZ081AAAAAElFTkSuQmCC"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="about-caio">
          <div className="about-caio-image">
            <img
              class="about-caio-image"
              src="https://avatars0.githubusercontent.com/u/21208934?s=460&v=4"
              alt="Caio's profile pricture"
            />
          </div>
          <div className="about-caio-name">Caio Godoi</div>
          <div className="about-caio-links">
            <div className="about-caio-github">
              <a
                href="https://github.com/caiogodoi"
                target="_blank"
                rel="noopener noreferrer"
                alt="GitHub"
              >
                <img
                  className="about-caio-github-image"
                  src="data:image/png;base64,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"
                  alt="GitHub"
                />
              </a>
            </div>
            <div className="about-caio-linkedin">
              <a
                href="https://www.linkedin.com/in/caio-godoi-95a113118/"
                target="_blank"
                rel="noopener noreferrer"
                alt="LinkedIn"
              >
                <img
                  className="about-caio-linkedin-image"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAExUlEQVRYR72Xe1BUVRzHv3d32WVXXorg8lBI0zSSLMfGnCYaR0fLGc3UUkfKSHsMjiMjmoQkhQSJDAwjk6WZha9SIzOKxobJHuTklCJijgry3F1WVhHYhV2WPc25J26cvdvuP9fOzJ2539/3d36/zz3n3r17BYwYKw/+8J4HnlTBg/iRcaXOiQrtKqgqjq2d99ZwTWH4ZPm+6suCICRNiI5EdNgoaDUqpfqKdVxuD6w9drRabSCENJxYv/AhGhcBlu6rKhCIsO3RyQm46/Sgy+GCa8ijKIBWrcJYgxbhOhX+vN4CIpDCyvWLskSAxeWn2hKN0fF9CIJjcEjRxt7FDEFqhGAQzRZr+9fpS8aLAIvKKklCfBxuDfDNHbZOdLdcF2tEJEyGIXKcInBRwWq0tHegauNSQQRYWHKCjDbGwenml32ivRWvpMwQm3589iKaRk1QBECnUeGOpQPVGcsZwPyiL4ghKkZWvGgOf8VbajsVAaBFHLfMOLPleQYwt/AoMUTFyoqXpsRxsU1nOxQEMKFm2yoGkJJ/iBii+WY0PjsmBKkPRopNK67YcM7cpxyAtQNns9cwgCfe/cwngGLdfBRyWDvwy9svMoDHd3xCDNHyH7+u+nPc1LHTZ4t60N6Du01XJI+uXlBIOBydbRi090pxbdhoGMaNhybYIENwWNvx2zsvM4DHtu8nNNF7HFk2nQutPlkv6gfCNdgxb5rkHf61HhdvtCA1ZSaSE/+9mWuvNuPwz3XoComDWqvjalHY33euYwAzsz7yCXB85SPcpBXHLog6cbQeRQumSl6jxYZJRnaveI++ASc2VNTAHmqUAfxR8CoDmLH1A2IYJ3/Gv0qdxU16tuK8pL09f/dL9YVr2Hv5rhdAKy7ueoMBJGeWE70PgG/T5nCTnjlQK2lvr6mrF3k110Q/Z+4UTBwbKuVa7vQirZJt3/Do72zFpd3pDCBpUxnRGxNkF3HmtSe52PwPf5K0t5d5+hLqTN2in2wMRfESfvtGzqU5/ZYWNJRuZABTN5YQvTFRBvBj+lwu9lR5jaT9eSE6Db5Zx8OPnMsAmnG1LIMBTEkvJsE+AGozFnAAc0q+l7Q/jyYF8gcszbhWvpkBTHq9yCfA+a2LOIBZu6ok7c+jSYF8CtC4dwsDSFxXQIJj7pNtQd32pVzs4Z2Vkvbn0aRA/oD5Jpr3ZzGA8Wn5ROcD4K/cFRzAtNzjkvbn0aRAvtN8E20HshlA7No8ojPKV+BG/ioO4P7so5L259GkQL7TchOmgzkMwLgml2hjJsq2oGVXKhdL2FohaX8eTQrku8xNsBzKZQBRq3OINmaSDKB990tcLD7zU0n782hSIN9lbsStI3kMIPKFbBLkA0BGpGBg0NwI2+f5DCBiRRbRjImFoNUr2OK/SxFXP9y3Teg+XsAAwpZtM+nCxsQMGSL+FwC1oxvOntvmnpOFsSJAyHNvloBgkyoyFoKGf28rTUTcTnhsJvpJVNr35fsZFIAeGv3izQ2AMFk1KgLQ6hXfDrrscPXDY+8GCLnef7o4CYCbNg8CQN+dQbqnN+RBrVkCQqKVvnKxniBYMeQ+5fxuTw79ZweglwMY/la8J835omQkgLgF/zSXvpbvMQQFoIf7bwzkyDzZZ081AAAAAElFTkSuQmCC"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
