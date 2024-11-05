function handle_contact_form_submission() {
    // Получаем данные из запроса
    $data = json_decode(file_get_contents('php://input'), true);
    $name = sanitize_text_field($data['name']);
    $email = sanitize_email($data['email']);
    $message = sanitize_textarea_field($data['message']);

    // Формируем текст сообщения
    $to = 'x788136@example.com'; // Замените на email, куда будут приходить сообщения
    $subject = 'Новое сообщение с формы обратной связи';
    $body = "Имя: $name\n\nEmail: $email\n\nСообщение:\n$message";
    $headers = ['Content-Type: text/plain; charset=UTF-8', "From: $email"];

    // Отправляем email
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success('Сообщение успешно отправлено.');
    } else {
        wp_send_json_error('Ошибка при отправке сообщения.');
    }
}

// Регистрируем endpoint
add_action('rest_api_init', function() {
    register_rest_route('contact-form/v1', '/send-email', [
        'methods' => 'POST',
        'callback' => 'handle_contact_form_submission',
        'permission_callback' => '__return_true',
    ]);
});

<!-- cors for localhost -->

function allow_cors_from_localhost($headers) {
    $headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'; // Укажите порт вашего React-приложения
    $headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS';
    $headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    return $headers;
}
add_filter('rest_api_init', function() {
    add_filter('rest_pre_serve_request', 'allow_cors_from_localhost');
});

<!-- cors for another site -->

function allow_cors_from_custom_origin($headers) {
    $headers['Access-Control-Allow-Origin'] = 'https://your-react-app-domain.com'; // Укажите домен React-приложения
    $headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS';
    $headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
    return $headers;
}
add_action('rest_api_init', function() {
    add_filter('rest_pre_serve_request', 'allow_cors_from_custom_origin');
});